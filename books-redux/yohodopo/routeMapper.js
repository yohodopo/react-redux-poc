import { BASICCOMPONENTS } from '../components/basicComponents';
import { BOOKS } from '../components/booksScreen';
import Login from "../components/login";

export const routeMapper = {
    '/basic': BASICCOMPONENTS,
    '/': Login,
    '/login': Login,
    '/books': BOOKS,
    '/books/SHOW_DONE': BOOKS,
    '/books/SHOW_ALL': BOOKS,
    '/books/SHOW_PENDING': BOOKS,
}
