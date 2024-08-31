import axios from "axios";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type ImageResponse = {
  results: ImageData[];
  total_pages: number;
};

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
