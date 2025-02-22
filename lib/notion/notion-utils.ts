// 노션 프로퍼티 파싱 유틸리티 함수들
export function parseProperty(property: any) {
  if (!property) return null;
  
  switch(property.type) {
    case 'title':
      return property.title[0]?.plain_text || null;
    case 'rich_text':
      return property.rich_text[0]?.plain_text || null;
    case 'date':
      return property.date?.start || null;
    case 'files':
      return property.files.map((file: any) => file.file?.url || file.external?.url);
    case 'checkbox':
      return property.checkbox;
    default:
      return null;
  }
}

// 블록 내용 파싱 함수
export function parseBlock(block: any) {
  switch (block.type) {
    case 'paragraph':
      return {
        type: 'paragraph',
        text: block.paragraph.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'heading_1':
      return {
        type: 'heading_1',
        text: block.heading_1.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'heading_2':
      return {
        type: 'heading_2',
        text: block.heading_2.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'heading_3':
      return {
        type: 'heading_3',
        text: block.heading_3.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'bulleted_list_item':
      return {
        type: 'bulleted_list_item',
        text: block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'numbered_list_item':
      return {
        type: 'numbered_list_item',
        text: block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'to_do':
      return {
        type: 'to_do',
        text: block.to_do.rich_text.map((text: any) => text.plain_text).join(''),
        checked: block.to_do.checked
      };
    case 'toggle':
      return {
        type: 'toggle',
        text: block.toggle.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'callout':
      return {
        type: 'callout',
        text: block.callout.rich_text.map((text: any) => text.plain_text).join(''),
        icon: block.callout.icon?.emoji || block.callout.icon?.external?.url
      };
    case 'quote':
      return {
        type: 'quote',
        text: block.quote.rich_text.map((text: any) => text.plain_text).join('')
      };
    case 'image':
      return {
        type: 'image',
        url: block.image.file?.url || block.image.external?.url
      };
    default:
      return null;
  }
}

// 프로젝트 데이터 파싱 함수
export function parseProject(page: any) {
  const properties = page.properties;
  
  return {
    id: page.id,
    title: parseProperty(properties.Title),
    subtitle: parseProperty(properties.Subtitle),
    mainImage: parseProperty(properties.mainImage)?.[0],
    createdDate: parseProperty(properties["Created Date"]),
    published: parseProperty(properties.Published),
  };
}

// 뉴스 데이터 파싱 함수
export function parseNews(page: any) {
  const properties = page.properties;
  
  return {
    id: page.id,
    title: parseProperty(properties.Title),
    content: parseProperty(properties.Content),
    date: parseProperty(properties.Date),
    thumbnail: parseProperty(properties.Thumbnail)?.[0],
  };
}
