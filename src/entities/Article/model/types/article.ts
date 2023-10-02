export enum BlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: number,
  type: BlockType,
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: BlockType.CODE,
  code: string,
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: BlockType.TEXT,
  paragraphs: string[],
  title?: string,
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: BlockType.IMAGE,
  src: string,
  title: string,
}

export type ArticleBlockType = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMY = 'ECONOMY',
}

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlockType[],
}
