# 1.

# N Elements    |   O(N)    |   O(log N)    |   O(N^2)
# 100           |   100     |   7           |   10,000
# 2000          |   2000    |   11          |   4,000,000


# 2.

# O(N^2) algorithm takes 256 steps. What is the size of the input array?
# Answer: 16


# 3.

def greatestProduct(array):
    greatestProductSoFar = array[0] * array[1]

    for i, iVal in enumerate(array):
        for j, jVal in enumerate(array):
            if i != j and iVal * jVal > greatestProductSoFar:
                greatestProductSoFar = iVal * jVal
    
    return greatestProductSoFar

# Answer: This algorithm has a runtime of O(N^2) since it loops through the input array 
# twice (that is, it has a nested loop).


# 4.

# O(N^2) version:
def greatestNumber(array):
    for i in array:
        is_val_the_greatest = True
        for j in array:
            if j > i:
                is_val_the_greatest = False
        if is_val_the_greatest:
            return i
        

# O(N) rewrite
def greatestNumberRefactored(array):
    greatest = array[0]
    for i in array:
        if i > greatest:
            greatest = i
    return greatest

nums = [1, 4, 2, 100, 3]
print(greatestNumberRefactored(nums))