import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'quiz' })
export class Quiz {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  category: string;

  @Column()
  type: string;

  @Column()
  difficulty: string;

  @Column()
  question: string;

  @Column({ name: 'correct_answer' })
  correctAnswer: string;

  @Column({ name: 'incorrect_answers', type: 'json' })
  incorrectAnswers: string[];
}
