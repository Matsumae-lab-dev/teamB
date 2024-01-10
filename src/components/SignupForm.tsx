export default function SignupForm() {
  return (
    <div className="border-2 h-3/4 w-96 p-8 rounded-md" >
      <h2 className="text-2xl m-6">welcome</h2>
      <div>
        <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs m-2" />
        <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs m-2" />
        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs m-2" />
      </div>
      <button className="btn m-6">continue</button>
      <div>
        <p className="text-gray-400">Already have an account?</p>
        <button className="text-blue-600" >→login</button>
      </div>
    </div>
  );
}
