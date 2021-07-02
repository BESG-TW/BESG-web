interface RichText {
  rich_text: {
    text: {
      content: string;
    };
  }[];
}

interface IAPIResponse {
  properties: {
    date: {
      date: {
        start: Date;
      };
    };
    topic: RichText;
    sharer: RichText;
    slides?: {
      url: string;
    };
    code?: {
      url: string;
    };
  };
}

export interface INotionResponse {
  results: IAPIResponse[];
}
