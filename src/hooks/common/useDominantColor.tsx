'use client';
import { UseDominantColorProps } from '@/interfaces';
import { getDominantColor, hexToRgba } from '@/utils';
import { useEffect, useState } from 'react';

export const useDominantColors = (imageUrl: string): UseDominantColorProps => {
	const [dominantColor, setDominantColor] = useState<string>('transparent');
	const [dominantRgbaColor, setDominantRgbaColor] =
		useState<string>('transparent');

	useEffect(() => {
		const getColors = async () => {
			if (!imageUrl) {
				setDominantColor('transparent');
				setDominantRgbaColor('transparent');
				return;
			}
			const dominantColorResponse = await getDominantColor(imageUrl);
			const dominantRgbaColorResponse = hexToRgba(dominantColorResponse);
			setDominantColor(dominantColorResponse);
			setDominantRgbaColor(dominantRgbaColorResponse);
		};
		getColors();
	}, [imageUrl]);

	return {
		dominantColor,
		dominantRgbaColor,
	};
};
