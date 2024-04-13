export type SuggestionCardProps = {
    serialNo: number;
    author: string;
    address?: string;
    header: string;
    content?: string;
  };

export type ReferenceCardProps = {
  name: string;
  description: string;
  imageUrl?: string;
  url: string;
  tags: string[]
}