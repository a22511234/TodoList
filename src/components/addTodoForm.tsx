import { useState } from "react";
interface AddTodoFormProps {
    onSubmit:(title:string)=>void;
}
export default function AddTodoForm({onSubmit}:AddTodoFormProps) {
  const [input, setInput] = useState("");
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(input);
    if(!input.trim()) return;

    onSubmit(input);
    setInput('');
}
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="What need to be done?"
          className="grow border rounded-s-md p-2 border-gray-400"
        />
        <button
          type="submit"
          className="w-16 bg-slate-900 text-white rounded-e-md hover:bg-slate-800"
        >
          Add
        </button>
      </form>
    </div>
  );
}
