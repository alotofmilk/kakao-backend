import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Default,
  HasMany,
} from "sequelize-typescript";
import Friend from "./friend.model";

@Table
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  phone: string;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @Default("")
  @Column(DataType.STRING(100))
  statusMessage: string;

  @HasMany(() => Friend)
  myFriends: User[];
}
