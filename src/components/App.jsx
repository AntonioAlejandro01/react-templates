import React from 'react';

function App() {
	return (
		<div className="flex flex-col h-full w-full bg-secondary items-center justify-center">
			<h1 className="font-bold text-3xl">Hello React!! 👩‍💻</h1>
      <p className='animate-bounce text-3xl'>💙💙💙</p>
			<p>This is the tailwindcss template for React</p>
			<p>See more templates</p>
			<a href="http://github.com/AntonioAlejandro01/react-templates">
				<button className="h-10 mx-2 px-3 font-semibold rounded-full bg-primary text-white">
					Here
				</button>
			</a>
		</div>
	);
}

export default App;
