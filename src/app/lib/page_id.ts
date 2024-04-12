'use client'
import { useParams } from 'next/navigation';
export default function GET_ID(){
    const params = useParams();
    const pageId=params.id
    return pageId
}