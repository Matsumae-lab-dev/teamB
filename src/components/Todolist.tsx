interface categorystr {
  category: string
}

export default function TodoList({ category }: categorystr) {
  return (
    <div className="flex flex-col w-full">
      <div className="divider divider-start divider-neutral">
        <p className="text-black text-2xl">{category}</p>
      </div>
    </div>
  );
}
