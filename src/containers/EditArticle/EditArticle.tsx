import React, { useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import './EditArticle.css';

interface PageEditorProps {
    page?: (pageName: string) => void;
}

const EditArticle: React.FC<PageEditorProps> = ({page }) => {
    const [articlePage, setArticlePage] = useState<string>('300SLR');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axiosApi.get('/pages/' + articlePage + '.json');
                setTitle(response.data.title || '');
                setContent(response.data.content || '');
            } catch (error) {
                console.log('Ошибка: ', error);
            }
        };

        fetchContent();
    }, [articlePage]);

    const handleSave = async () => {
            await axiosApi.put('/pages/' + articlePage + '.json', { title, content });
            if (page) {
                page(articlePage);
            }
    };

    return (
        <div className='text-center'>
            <h2 className=' mt-3 mb-3' >Редактирование страницы</h2>
            <label className='page' htmlFor="page-select">Выберите страницу:</label>
            <select id="page-select" value={articlePage} onChange={(e) => setArticlePage(e.target.value)}>
                <option value="300SLR">300SLR</option>
                <option value="leader">Leader</option>
                <option value="popular">Popular</option>
                <option value="story">Story</option>
                <option value="tesla">Tesla</option>
            </select>
            <div>
                <label className='page' htmlFor="title">Заголовок:</label>
                <input className='input-page' id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label className='page' htmlFor="content">Контент:</label>
                <textarea className='textarea-page' id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button className='btn-page' onClick={handleSave}>Обновить</button>
        </div>
    );
};

export default EditArticle;
