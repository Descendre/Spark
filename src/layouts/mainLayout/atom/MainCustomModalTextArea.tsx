'use client';
import { Switch, TextField } from '@mui/material';

export const MainCustomModalTextArea = () => {
	return (
		<>
			<TextField
				fullWidth
				multiline
				variant="outlined"
				rows={10}
				label="キャラクターのカスタマイズ設定を入力"
				inputProps={{ maxLength: 200 }}
			/>
			<Switch />
		</>
	);
};
