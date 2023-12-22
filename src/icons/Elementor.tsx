import React from 'react';

interface IconProps {
	size?: number;
}

const Elementor: React.FC<IconProps> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M 1.1992188 0 C 0.53521875 0 -1.4802974e-16 0.53521875 0 1.1992188 L 0 22.800781 C 0 23.464781 0.53521875 24 1.1992188 24 L 22.800781 24 C 23.464781 24 24 23.464781 24 22.800781 L 24 1.1992188 C 24 0.53521875 23.464781 -1.4802974e-16 22.800781 0 L 1.1992188 0 z M 10.933594 6.6640625 L 17.335938 6.6640625 L 17.335938 8.796875 L 10.933594 8.796875 L 10.933594 6.6640625 z M 6.6699219 6.6699219 L 8.8027344 6.6699219 L 8.8027344 17.330078 L 6.6699219 17.330078 L 6.6699219 6.6699219 z M 10.933594 10.933594 L 17.335938 10.933594 L 17.335938 13.066406 L 10.933594 13.066406 L 10.933594 10.933594 z M 10.933594 15.197266 L 17.335938 15.197266 L 17.335938 17.330078 L 10.933594 17.330078 L 10.933594 15.197266 z" />
			</svg>
		</span>
	);
}

export default Elementor;