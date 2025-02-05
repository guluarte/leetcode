class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Define 32-bit integer limits
        max_int = 2**31 - 1  # Maximum positive 32-bit integer
        min_int = -(2**31)  # Minimum negative 32-bit integer

        # Initialize variables
        num_str = []  # List to store digits as characters
        sign = 1  # 1 for positive, -1 for negative
        has_digit = False  # Flag to track if we've seen any digits
        has_sign = False

        # Process each character in the string
        for char in s:
            # Skip leading whitespace
            if char == " ":
                if has_sign:
                    break
                if has_digit:
                    break
                continue
            # Handle negative sign (only before any digits)
            if char == "-" and not has_digit and not has_sign:
                sign = -1
                has_sign = True
                continue
            # Handle positive sign (only before any digits)
            elif char == "+" and not has_digit and not has_sign:
                sign = 1
                has_sign = True
                continue
            # If character is a digit, add to number string
            if char.isdigit() or char == "0":
                num_str.append(char)
                has_digit = True
            else:
                # Stop processing if we encounter non-digit (after optional sign)
                break

        # If no digits were found, return 0
        if not num_str:
            return 0

        # Convert collected digits to integer and apply sign
        num = int("".join(num_str))
        num *= sign

        # Clamp the number to 32-bit integer range
        if num > max_int:
            return max_int
        elif num < min_int:
            return min_int
        else:
            return num

