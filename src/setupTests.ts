import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Automatically mock react-ga and react-helmet
vi.mock('react-ga');
vi.mock('react-helmet');
