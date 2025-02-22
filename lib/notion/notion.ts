import { Client } from '@notionhq/client';
import { parseProject, parseNews, parseBlock } from './notion-utils';
import { PROJECT_DATABASE_ID, NEWS_DATABASE_ID } from './const';

// Notion 클라이언트 초기화 
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: PROJECT_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        property: 'Order',
        direction: 'ascending'
      }
    ]
  });
  return response.results.map(parseProject);
}

export async function getNewses() {
  const response = await notion.databases.query({
    database_id: NEWS_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    },
  });
  return response.results.map(parseNews);
}

export async function getProject(id: string) {
  // 순차적으로 처리
  const pageResponse = await notion.pages.retrieve({ page_id: id });
  const properties = parseProject(pageResponse);

  // 모든 블록 가져오기
  let allBlocks: any[] = [];
  let hasMore = true;
  let startCursor: string | undefined = undefined;

  while (hasMore) {
    const blocksResponse = await notion.blocks.children.list({ 
      block_id: id,
      start_cursor: startCursor,
    });
    
    allBlocks = [...allBlocks, ...blocksResponse.results];
    hasMore = blocksResponse.has_more;
    startCursor = blocksResponse.next_cursor || undefined;
  }

  const content = allBlocks.map(parseBlock);
  
  return {
    ...properties,
    content
  };
}

export async function getNews(id: string) {
  const response = await notion.pages.retrieve({ page_id: id });
  return parseNews(response);
}