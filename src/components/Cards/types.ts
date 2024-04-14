export type SuggestionCardProps = {
    serialNo: number;
    author: string;
    address?: string;
    header: string;
    content?: string;
  };

export type ReferenceCardProps = {
  id:number;
  name: string;
  description: string;
  imageUrl?: string;
  url: string;
  source: string;
  tags: string[]
}