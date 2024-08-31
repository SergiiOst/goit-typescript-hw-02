import axios from "axios";

export interface Image {
  id: string;
  description: string | null;
  urls: {
    small: string;
    full: string;
  };
}

export interface ImageResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

const fetchImages = async (
  query: string,
  page: number
): Promise<ImageResponse> => {
  const response = await axios.get<ImageResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        query,
        page,
        client_id: "1qiLsK-DH46PiXJMzlZvqiSCoDbzlNxNlKiNMiujA6c",
      },
    }
  );

  return response.data;
};

export default fetchImages;
