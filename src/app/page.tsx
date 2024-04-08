import ButtonTest from '@/app/_components/buttonTest';
import { Task } from '@/app/_components/Task';

export default function Home() {
  return (
    <main>
      <p>안녕</p>
      <ButtonTest label={'아아'} primary={true} />
      <Task
        task={{ id: 1, title: '내가 해야할일은 무엇이냐', state: '' }}
        onArchiveTask={true}
        onPinTask={'1'}
      />
      <Task
        task={{ id: 2, title: '내가 해야할일은 무엇이냐', state: '' }}
        onArchiveTask={true}
        onPinTask={'1'}
      />
    </main>
  );
}
