class Solution(object):
    def mirrorDistance(self, n):
        """
        :type n: int
        :rtype: int
        """
        str_n = list(str(n))
        rev_n = ''.join(reversed(str_n))
        distance = abs(n - int(rev_n))
        return distance
    

if __name__ == "__main__":
    sol = Solution()
    print(sol.mirrorDistance(52))  # Output: 198
    print(sol.mirrorDistance(456))  # Output: 198
    print(sol.mirrorDistance(789))  # Output: 198