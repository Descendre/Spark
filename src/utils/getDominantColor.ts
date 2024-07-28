'use client';
import Vibrant from 'node-vibrant';

export const getDominantColor = async (
	imageUrl: string | undefined
): Promise<string> => {
	try {
		if (!imageUrl) return '0000ff';
		const palette = await Vibrant.from(imageUrl).getPalette();

		const dominantSwatch =
			palette.Vibrant ||
			palette.Muted ||
			palette.DarkVibrant ||
			palette.DarkMuted ||
			palette.LightVibrant ||
			palette.LightMuted;

		if (dominantSwatch) {
			const rgb = dominantSwatch.getRgb().map(Math.round);
			const color = rgb.reduce(
				(acc, curr) => acc + ('0' + curr.toString(16)).slice(-2),
				'#'
			);
			return color.toUpperCase();
		} else {
			throw new Error('Unable to extract dominant color');
		}
	} catch (error) {
		console.error('Error extracting dominant color:', error);
		throw error;
	}
};
