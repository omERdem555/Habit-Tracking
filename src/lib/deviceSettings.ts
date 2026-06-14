import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import type { NotificationSettings } from '../types';

/**
 * Update the notification settings for a specific device document in Firestore.
 */
export async function updateDeviceSettings(
  userId: string,
  deviceId: string,
  settings: NotificationSettings,
): Promise<void> {
  try {
    const deviceRef = doc(db, 'users', userId, 'devices', deviceId);
    await setDoc(deviceRef, { notificationSettings: settings }, { merge: true });
  } catch (error) {
    console.error('Failed to update device settings in Firestore:', error);
  }
}

/**
 * Fetch the notification settings for a specific device document from Firestore.
 * Returns undefined if the document does not exist or on error.
 */
export async function fetchDeviceSettings(
  userId: string,
  deviceId: string,
): Promise<NotificationSettings | undefined> {
  try {
    const deviceRef = doc(db, 'users', userId, 'devices', deviceId);
    const snap = await getDoc(deviceRef);
    if (snap.exists()) {
      const data = snap.data() as { notificationSettings?: NotificationSettings };
      return data.notificationSettings;
    }
  } catch (error) {
    console.error('Failed to fetch device settings from Firestore:', error);
  }
  return undefined;
}
