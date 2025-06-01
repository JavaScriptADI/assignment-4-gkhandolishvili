import random

print("=" * 50)
print("1. FizzBuzz (1-100)")
print("=" * 50)
for i in range(1, 101):
    if i % 15 == 0:  # divisible by both 3 and 5
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

print("\n" + "=" * 50)
print("2. 100 Random Numbers (1-100)")
print("=" * 50)
for i in range(100):
    print(random.randint(1, 100))

print("\n" + "=" * 50)
print("3. Sum of Even Numbers (1-1000)")
print("=" * 50)
sum_even = sum(i for i in range(1, 1001) if i % 2 == 0)
print(f"Sum of all even numbers between 1 and 1000: {sum_even}")

print("\n" + "=" * 50)
print("4. Sum of Numbers Divisible by 3 OR 5 (1-1000)")
print("=" * 50)
sum_3_or_5 = sum(i for i in range(1, 1001) if i % 3 == 0 or i % 5 == 0)
print(f"Sum of numbers divisible by 3 or 5: {sum_3_or_5}")

print("\n" + "=" * 50)
print("5. Sum of Numbers Divisible by BOTH 3 AND 5 (1-1000)")
print("=" * 50)
sum_3_and_5 = sum(i for i in range(1, 1001) if i % 3 == 0 and i % 5 == 0)
print(f"Sum of numbers divisible by both 3 and 5: {sum_3_and_5}")

# Alternative way to check divisible by both 3 and 5:
sum_15 = sum(i for i in range(1, 1001) if i % 15 == 0)
print(f"Alternative (divisible by 15): {sum_15}")
