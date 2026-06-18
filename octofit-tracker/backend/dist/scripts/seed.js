/**
 * Seed the octofit_db database with test data
 *
 * Usage: npx ts-node-dev src/scripts/seed.ts
 *
 * This script connects to MongoDB and populates the octofit_db database
 * with sample users, teams, activities, leaderboard entries, and workouts.
 */
import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Workout } from '../models/Workout.js';
const mongoUri = 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
        // Clear existing data
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await Leaderboard.deleteMany({});
        await Workout.deleteMany({});
        console.log('Cleared existing data');
        // Create sample users
        const users = await User.insertMany([
            {
                username: 'alice_runner',
                email: 'alice@example.com',
                bio: 'Marathon enthusiast',
                totalActivities: 45,
                totalDistance: 125.5,
                totalDuration: 12500,
            },
            {
                username: 'bob_cyclist',
                email: 'bob@example.com',
                bio: 'Road cyclist',
                totalActivities: 38,
                totalDistance: 450.2,
                totalDuration: 18000,
            },
            {
                username: 'carol_swimmer',
                email: 'carol@example.com',
                bio: 'Competitive swimmer',
                totalActivities: 52,
                totalDistance: 85.3,
                totalDuration: 22000,
            },
            {
                username: 'david_gym',
                email: 'david@example.com',
                bio: 'Strength training focus',
                totalActivities: 60,
                totalDistance: 0,
                totalDuration: 25000,
            },
            {
                username: 'emma_yogi',
                email: 'emma@example.com',
                bio: 'Yoga and flexibility',
                totalActivities: 72,
                totalDistance: 15.5,
                totalDuration: 30000,
            },
        ]);
        console.log('Created 5 sample users');
        // Create sample teams
        const teams = await Team.insertMany([
            {
                name: 'Runners United',
                description: 'A team for running enthusiasts',
                members: [users[0]._id, users[1]._id],
                leader: users[0]._id,
                totalActivities: 15,
                teamScore: 850,
            },
            {
                name: 'Fit Fighters',
                description: 'Strength and fitness training',
                members: [users[3]._id, users[4]._id],
                leader: users[3]._id,
                totalActivities: 20,
                teamScore: 1200,
            },
            {
                name: 'Wave Riders',
                description: 'Swimming and water sports',
                members: [users[2]._id, users[0]._id],
                leader: users[2]._id,
                totalActivities: 18,
                teamScore: 950,
            },
        ]);
        console.log('Created 3 sample teams');
        // Create sample activities
        const activities = await Activity.insertMany([
            {
                userId: users[0]._id,
                activityType: 'running',
                distance: 10.5,
                duration: 1050,
                calories: 900,
                description: 'Morning run at the park',
            },
            {
                userId: users[1]._id,
                activityType: 'cycling',
                distance: 35.2,
                duration: 2100,
                calories: 1250,
                description: 'Long ride on mountain trail',
            },
            {
                userId: users[2]._id,
                activityType: 'swimming',
                distance: 2.5,
                duration: 1800,
                calories: 400,
                description: 'Lap swimming session',
            },
            {
                userId: users[3]._id,
                activityType: 'strength_training',
                distance: 0,
                duration: 1200,
                calories: 500,
                description: 'Full body workout',
            },
            {
                userId: users[4]._id,
                activityType: 'yoga',
                distance: 0.5,
                duration: 1800,
                calories: 300,
                description: 'Hatha yoga session',
            },
        ]);
        console.log('Created 5 sample activities');
        // Create sample leaderboard entries
        await Leaderboard.insertMany([
            {
                userId: users[3]._id,
                username: 'david_gym',
                rank: 1,
                points: 2400,
                totalActivities: 60,
                totalDistance: 0,
                totalDuration: 25000,
            },
            {
                userId: users[4]._id,
                username: 'emma_yogi',
                rank: 2,
                points: 2100,
                totalActivities: 72,
                totalDistance: 15.5,
                totalDuration: 30000,
            },
            {
                userId: users[2]._id,
                username: 'carol_swimmer',
                rank: 3,
                points: 1950,
                totalActivities: 52,
                totalDistance: 85.3,
                totalDuration: 22000,
            },
            {
                userId: users[0]._id,
                username: 'alice_runner',
                rank: 4,
                points: 1850,
                totalActivities: 45,
                totalDistance: 125.5,
                totalDuration: 12500,
            },
            {
                userId: users[1]._id,
                username: 'bob_cyclist',
                rank: 5,
                points: 1600,
                totalActivities: 38,
                totalDistance: 450.2,
                totalDuration: 18000,
            },
        ]);
        console.log('Created leaderboard entries');
        // Create sample workouts
        await Workout.insertMany([
            {
                userId: users[3]._id,
                name: 'Full Body Strength',
                description: 'Complete strength training routine',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: 8, weight: 185 },
                    { name: 'Squats', sets: 4, reps: 10, weight: 225 },
                    { name: 'Deadlifts', sets: 3, reps: 5, weight: 315 },
                ],
                duration: 60,
                difficulty: 'advanced',
            },
            {
                userId: users[4]._id,
                name: 'Beginner Yoga Flow',
                description: 'Gentle yoga for beginners',
                exercises: [
                    { name: 'Sun Salutation', sets: 5, reps: 1 },
                    { name: 'Downward Dog', sets: 3, reps: 10 },
                    { name: 'Child Pose', sets: 2, reps: 1 },
                ],
                duration: 30,
                difficulty: 'beginner',
            },
            {
                userId: users[0]._id,
                name: 'Core Builder',
                description: 'Core strengthening exercises',
                exercises: [
                    { name: 'Planks', sets: 3, reps: 60 },
                    { name: 'Crunches', sets: 3, reps: 20 },
                    { name: 'Leg Raises', sets: 3, reps: 15 },
                ],
                duration: 20,
                difficulty: 'intermediate',
            },
        ]);
        console.log('Created sample workouts');
        console.log('\n✅ Database seeding completed successfully!');
        console.log('Sample data has been inserted into the octofit_db database.');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
    finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}
seed();
