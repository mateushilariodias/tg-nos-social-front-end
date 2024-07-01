export interface IDataFaqSection {
    id: number;
    question: string;
    answer: string;
}

export const DataFaqSection: IDataFaqSection[] = [{
    id: 1,
    question:'Quantas ONG um usuário pode cadastrar na plataforma?',
    answer:'Inicialmente, cada usuário pode cadastrar apenas uma ONG. No entanto, no futuro, será possível cadastrar mais de uma ONG.',
},{
    id: 2,
    question:'Apenas usuários podem interagir com as postagens?',
    answer:'Sim, apenas usuários podem interagir com as postagens. Inicialmente, as ONG não poderão curtir ou comentar suas próprias publicações nem nas de outras ONG, mas essa funcionalidade poderá ser adicionada futuramente.',
},{
    id: 3,
    question:'Quem pode criar publicações?',
    answer:'Apenas ONG podem criar publicações. Os usuários têm a permissão de curtir e comentar nas publicações, mas não de criar postagens.',
},{
    id: 4,
    question:'É possível realizar doações pelo sistema?',
    answer:'Não, as doações serão combinadas fora do sistema por enquanto.',
},]