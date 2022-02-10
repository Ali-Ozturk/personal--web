import kopraFullsize from '../assets/images/kopra-design.jpg';

type PortfolioDataType = {
    description: string;
    thumbPicture: string;
    hoverPicture?: string;
    technologies: string[];
    partners?: string[];
}

export const PortfolioData: PortfolioDataType[] = [
    {
        description: 'KOPRA - Kontorelevernes praktiksystem',
        thumbPicture: kopraFullsize,
        technologies: ['Java', 'Spring Boot', 'MSSQL', 'React'],
        partners: ['Køge Handelsskole'],
    },
]
