
import ButtonTest from "@/app/_components/buttonTest";
import {Task} from "@/app/_components/Task";


export default function Home() {
  const test = ()=>{
    alert("aa")
  }
  return (
    <main>
      안녕
      <ButtonTest label={"아아"}/>
        <Task task={{id:1, title:"내가 해야할일은 무엇이냐", state:""}} onArchiveTask={true} onPinTask={"1"} />
    </main>
  );
}
