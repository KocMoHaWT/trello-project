import ICard from '../ICard';

export default interface IBoardState {
	title: string;
	lists: {
		id: number;
		title: string;
		cards: ICard[];
	}[];
}
