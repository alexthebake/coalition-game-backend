import { Model } from "sequelize";

class Player extends Model {
  public id!: number;
  public name!: string;
}

export default Player;
