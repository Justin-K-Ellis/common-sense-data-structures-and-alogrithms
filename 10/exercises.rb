# 1. What is the base case in this function? 
def print_every_other(low, high)
  return if low > high
  puts low
  print_every_other(low + 2, high)
end

# ANSWER: line 3, `if low > high`

# ===

# 2. What will happen with this variation of the factroial function?
def factroial(n)
  return 1 if n === 1
  return n * factroial(n - 2)
end 

# ANSWER: This will infinitely call factorial with zero & negative numbers, like:
#
# factorial(0)
# factorial(-2)
# factorial(-4)
#
# since the base case is explicitly set to n being 1.


# 3. Add the base case to the function below that sums numbers in a given range:
def sum(low, high)
  return high + sum(low, high - 1)
end

# ANSWER:
def sum(low, high)
  return low if high == low
  return high + sum(low, high - 1)
end

# 4. Write a recursive function that prints only numbers in a nested array.

# ANSWER:
# def print_nums(array)
#   for each element e in array
  #   if e is a number
  #     print e
  #   else
  #     print_nums(e)