import Elysia from "elysia";

const laptopRoutes = new Elysia({prefix:'/laptop'})
.get('/', () => 'all laptops')
.get('/:id', () => 'specific laptop')
.post('/', () => 'create new laptop data')
.put('/:id', () => 'update specific laptop data')
.delete('/:id', () => 'delete specific laptop data')

export default laptopRoutes;