 
 
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

/**
 * Validates email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Checks if a given time range overlaps with any existing ranges.
 * @param {Array} existingRanges - Array of existing time ranges.
 * @param {Object} newRange - New time range to check {start, end}.
 * @returns {boolean} True if there is an overlap, false otherwise.
 */
export const isOverlapping = (existingRanges, newRange) => {
  for (const range of existingRanges) {
    if (newRange.start < range.end && newRange.end > range.start) {
      return true;
    }
  }
  return false;
};