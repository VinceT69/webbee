import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu_items')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'integer', default: null })
  parent_id: number;

  @Column({ type: 'datetime' })
  created_at: string;

  @Column({ type: 'datetime' })
  updated_at: string;

  @ManyToMany(type => MenuItem)
  @JoinTable()
  menu_items: MenuItem[];
}
