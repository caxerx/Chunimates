import React from 'react';
import { Badge } from 'react-native-paper';
import tw from 'twrnc';

interface DifficultyBadgeProps {
  difficulty: ChunithmDifficulty;
  constant: number;
}

const BadgeStyleMapping: Record<ChunithmDifficulty, string> = {
  BAS: 'bg-green-400',
  ADV: 'bg-yellow-500',
  EXP: 'bg-red-500',
  MAS: 'bg-purple-500',
  ULT: 'bg-red-900',
};

const DifficultyBadge = ({ difficulty, constant }: DifficultyBadgeProps) => {
  return (
    <Badge
      size={24}
      style={tw`font-bold self-center ${BadgeStyleMapping[difficulty]}`}>{`${difficulty} ${constant}`}</Badge>
  );
};
export default DifficultyBadge;
