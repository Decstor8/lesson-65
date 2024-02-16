import React, { useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { useParams } from 'react-router-dom';
import { Page } from "../../types";

const MainPage: React.FC = () => {
    const { pageName } = useParams<{pageName: string}>();
    const [content, setContent] = useState<Page | null>(null);

    useEffect(() => {
        const fetchMainContent = async () => {
            try {
                const response = await axiosApi.get('/pages/' + pageName + '.json');
                setContent(response.data);
            } catch (error) {
                console.log('Ошибка, не получилось отобразить', error);
            }
        };

        fetchMainContent();
    }, [pageName]);

    if (!content) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className='text-center'>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
        </div>
    );
};

export default MainPage;
