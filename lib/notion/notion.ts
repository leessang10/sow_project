import { Client } from '@notionhq/client';
import { parseProject, parseNews, parseBlock } from './notion-utils';
import { PROJECT_DATABASE_ID, NEWS_DATABASE_ID } from './const';

// Notion 클라이언트 초기화 
const notion = new Client({
  // auth: process.env.NOTION_API_KEY,
  auth: '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',
});

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: PROJECT_DATABASE_ID,
  });
  return response.results.map(parseProject);
}

export async function getNewses() {
  const response = await notion.databases.query({
    database_id: NEWS_DATABASE_ID,
  });
  return response.results.map(parseNews);
}

export async function getProject(id: string) {
  // 순차적으로 처리
  const pageResponse = await notion.pages.retrieve({ page_id: id });
  const blocksResponse = await notion.blocks.children.list({ block_id: id });

  const properties = parseProject(pageResponse);

  const content = blocksResponse.results
    .map(parseBlock);
  // console.log(content);  
  return {
    ...properties,
    content
  };
}

export async function getNews(id: string) {
  const response = await notion.pages.retrieve({ page_id: id });
  return parseNews(response);
}