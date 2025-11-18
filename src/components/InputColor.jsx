import React from 'react'

const InputColor = ({ onChange }) => {
	return (
		<div>
			<label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"></label>
			<input
				onChange={e => onChange(e.target.value)}
				type="text"
				id="first_name"
				class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
				placeholder="type blue, green, red, etc"
				required
			/>
		</div>
	)
}

export default InputColor