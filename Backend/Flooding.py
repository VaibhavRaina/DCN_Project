# import requests
# import string
# import urllib3
# import random
# urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


# url = "http://localhost:8080/api/form/submit" 

# base_description = ""


# while True:
#     found_char = False
#     for c in string.printable:
#         if True:
#             userType=["individual","organization"]
#             bookingReason=["parking","function","other"]
#             agree=[True,False]
#             u=random.randint(0,1)
#             b=random.randint(0,2)
#             userid=random.randint(1,1000000000)
#             number=random.randint(1000000000,9999999999)
#             email = ''.join(random.choices(string.ascii_uppercase + string.digits,k=7))
#             description=''.join(random.choices(string.ascii_uppercase + string.digits,k=30))
#             form_data_template = {
                
#                 "name": "test",
#                 "email": str(email)+"@"+str(email)+".com",
#                 "phoneNumber": str(number),
#                 "description": str(description),  
#                 "userType": str(userType[u]),
#                 "bookingReason": str(bookingReason[b]),
#                 "agreeToTerms": True,
#                 "agreeToContact": agree[u],
#                 "userId": userid
#             }
#             payload = form_data_template.copy()
#             response = requests.post(url, json=payload)
#             print(response)




# 
import requests
# import string
# import urllib3
# import random
# urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


# # url = "https://api.refocus.co.in/feedback" 
# url = "https://api.refocus.co.in/tab-data" 

# base_description = ""


# while True:
#     found_char = False
#     for c in string.printable:
#         if True:

#             # form_data_template = {
#             #     # "age": "43",
#             #     # "feedback": "dsfgdsfgdsfg",
#             #     # "name": "dfgs",
#             #     # "occupation": "organisation",
#             #     # "review": "sfgsdfg",
#             #     # "userId": 3
#             #     "userEmail":"vaibhav@gmail.com"
#             # }
#             form_data_template = {
#     "Wname": "Example Workspace Name",
#     "selectedTabs": [
#         {
#             "title": "First Tab Title",
#             "url": "https://www.youtube.com/watch?v=533wkVpLjqU&list=PL6xbXi2C3sePDwyboAcu7l1UYuUT2SWYd&index=24&ab_channel=AnitaR",
#             "image": "https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="  # Optional, can be null
#         },
#     ],
#     "userEmail": "gamerspot12345@gmail.com"
# }


#             payload = form_data_template.copy()
#             response = requests.post(url, json=payload, verify=False)
#             print(response)

import pandas as pd
import random

# Constants
NUM_ENTRIES = 10000

# Generate random data
data = {
    "student_id": range(1, NUM_ENTRIES + 1),
    "interest_level": [random.randint(1, 5) for _ in range(NUM_ENTRIES)],
    "dependency_level": [random.randint(1, 5) for _ in range(NUM_ENTRIES)],
    "engagement_level": [random.randint(1, 5) for _ in range(NUM_ENTRIES)],
}

# Create DataFrame
df = pd.DataFrame(data)

# Save DataFrame to a CSV file
df.to_csv('student_data.csv', index=False)

print("CSV file 'student_data.csv' has been created successfully!")


