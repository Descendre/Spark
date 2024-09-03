'use client';
import { useCharacter, usePalette } from '@/hooks';
import { Box, Switch, TextField, Typography } from '@mui/material';

export const MainCustomModalTextArea = () => {
	const palette = usePalette();
	const { handleSetCustomText, customText, isCustom, setIsCustom } =
		useCharacter();

	return (
		<>
			<TextField
				fullWidth
				multiline
				variant="outlined"
				rows={10}
				label="キャラクターのカスタマイズ設定を入力"
				inputProps={{ maxLength: 200 }}
				value={customText || ''}
				onChange={(e) => handleSetCustomText({ text: e.target.value })}
			/>
			<Box
				display="flex"
				justifyContent="end"
				alignItems="center"
				gap="10px"
				width="100%"
			>
				<Typography variant="body2" color={palette.text.disabled}>
					カスタムモードを適用
				</Typography>
				<Switch
					checked={isCustom}
					onChange={() => setIsCustom((prev) => !prev)}
				/>
			</Box>
		</>
	);
};
