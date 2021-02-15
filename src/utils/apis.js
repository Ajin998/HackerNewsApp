import axios from "axios";
import { BASE_URL } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);
    return story;
  } catch {
    console.log("Error while getting stories");
  }
};

export const getStories = async (type) => {
  try {
    //extract data from axios and giving alias as storyIds
    const { data: storyIds } = await axios.get(
      `${BASE_URL}/${type}stories.json`
    );
    console.log(storyIds);
    //extracting first 30 articles for faster loading...
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory)); //getStory will get storyId automatically.
    return stories;
  } catch (e) {
    console.log("Error while fetching list of stories");
  }
};
