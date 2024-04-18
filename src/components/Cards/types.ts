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

export type OfficialDocumentDetailsProps = {
  required_documents?: string;
  visa_fee?: string;
  visa_validity?: string;
  visa_period?: string;
}

export type OfficialDocumentCardProps = {
    author: string;
    address?: string;
    header: string;
    details?: OfficialDocumentDetailsProps;
}