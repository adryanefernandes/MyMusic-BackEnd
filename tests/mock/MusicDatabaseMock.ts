import { MusicDataBase } from "../../src/data/MusicDataBase";
import { Music } from "../../src/model/musicInterfaces";

export class MusicDataBaseMock extends MusicDataBase {
  async createMusic(music: Music): Promise<void> {
  }

  async getMusics(): Promise<Music[]>{
    const music: Music = {
      id: "1",
      title: "test",
      album: "test",
      author: "Ana test",
      file: "link",
      genre: ["rock"],
      date: "2021-05-23"
    }
 
    return [music]
  }
}

export default new MusicDataBaseMock();