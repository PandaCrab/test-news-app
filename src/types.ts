export type FilterTypes = {
    category: string;
    country: string;
};

export type Articles = {
    source: {
        id?: string;
        source?: string;
    };
    author?: string;
    title: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
}

export type NewsResponse = {
    status: string;
    totalResults: number;
    articles: Articles[];
}
