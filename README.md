trying backend cobalaundry

authentication :
http://localhost:3000/api/v1/users/login

POST :
{
	"user": {
        "username": "admin2",
        "password": "admin"
	}
}

Routes :

http://localhost:3000/api/v1/details/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:invoice', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/itemins/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:item_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/itemouts/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:item_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/items/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:item_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/members/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:member_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/outcomes/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:outcome_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/processlist/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:invoice', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/rules/
router.get('/',index)
router.get('/:id',show)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/salarylist/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:salary_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/services/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:service_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/takeouts/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:invoice', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/transactions/
router.get('/',index)
router.get('/:id',show)
router.get('/search/:invoice', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

http://localhost:3000/api/v1/users/
router.get('/',index)
router.get('/:id',show)
router.post('/',store)
router.post('/login', authenticate)
router.put('/:id',update)
router.delete('/:id',destroy)

