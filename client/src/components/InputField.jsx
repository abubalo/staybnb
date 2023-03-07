function InputField({ title, desc, value, setValue, placeholder, textArea }) {
  return (
    <div className="">
      <h1 className="text-xl font-medium text-slate-800">{title}</h1>
      <p className="text-sm text-gray-500">{desc}</p>
      {textArea ? (
        <textarea className="w-full border  h-[150x] resize-none rounded-lg p-2" value={value} onChange={e => setValue(e.target.value)}></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value ||""}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default InputField;
