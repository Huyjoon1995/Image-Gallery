export interface Image {
    format: string,
    width: number,
    height: number,
    filename: string,
    id: number,
    author: string,
    author_url: string,
    post_url: string
    download_url?: string
}