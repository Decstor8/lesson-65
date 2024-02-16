import React, { useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { Page } from '../../types';

const Components: React.FC = () => {
    const [pages, setPages] = useState<Page[]>([]);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await axiosApi.get('/pages.json');
                if (response.data) {
                    const pagesArray: Page[] = Object.values(response.data);
                    setPages(pagesArray);
                }
            } catch (error) {
                console.log('Ошибка: ', error);
            }
        };

        fetchPages();
    }, []);

    return (
        <div>
            <h2 className='text-center fw-bold fs-1 mt-4 mb-4'>Главная страница</h2>
            {pages.map((page: Page, index: number) => (
                <div key={index} className='text-center mt-4 mb-4'>
                    <h3 className='m-1'>{page.title}</h3>
                    <p >{page.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Components;
