import React from 'react'


export default function AuthorViews({news}){
    return(

        <>
        <h1>Компонент определенного автора: {news.author} его
        id: {news.objectID} (вложенная навигация)</h1>
        </>
    )
}